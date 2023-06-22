<?php

/**
 * Factory for PathResolver.
 *
 * PHP version 8
 *
 * Copyright (C) The National Library of Finland 2022.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 2,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category VuFind
 * @package  Config
 * @author   Ere Maijala <ere.maijala@helsinki.fi>
 * @license  http://opensource.org/licenses/gpl-2.0.php GNU General Public License
 * @link     https://vufind.org/wiki/development Wiki
 */

namespace VuFind\Config;

use Laminas\Config\Config;
use Laminas\ServiceManager\Exception\ServiceNotCreatedException;
use Laminas\ServiceManager\Exception\ServiceNotFoundException;
use Laminas\ServiceManager\Factory\FactoryInterface;
use Psr\Container\ContainerExceptionInterface as ContainerException;
use Psr\Container\ContainerInterface;
use VuFind\Config\Feature\IniReaderTrait;

/**
 * Factory for PathResolver.
 *
 * @category VuFind
 * @package  Config
 * @author   Ere Maijala <ere.maijala@helsinki.fi>
 * @license  http://opensource.org/licenses/gpl-2.0.php GNU General Public License
 * @link     https://vufind.org/wiki/development Wiki
 */
class PathResolverFactory implements FactoryInterface
{
    use IniReaderTrait;

    /**
     * Default base config file subdirectory under the base directory
     *
     * @var string
     */
    protected $defaultBaseConfigSubdir = PathResolver::DEFAULT_CONFIG_SUBDIR;

    /**
     * Default config file subdirectory under a local override directory
     *
     * @var string
     */
    protected $defaultLocalConfigSubdir = PathResolver::DEFAULT_CONFIG_SUBDIR;

    /**
     * Create an object
     *
     * @param ContainerInterface $container     Service manager
     * @param string             $requestedName Service being created
     * @param null|array         $options       Extra options (optional)
     *
     * @return object
     *
     * @throws ServiceNotFoundException if unable to resolve the service.
     * @throws ServiceNotCreatedException if an exception is raised when
     * creating a service.
     * @throws ContainerException&\Throwable if any other error occurs
     */
    public function __invoke(
        ContainerInterface $container,
        $requestedName,
        array $options = null
    ) {
        if (!empty($options)) {
            throw new \Exception('Unexpected options sent to factory.');
        }
        $localDirs = [];
        $currentDir = defined('LOCAL_OVERRIDE_DIR')
            && strlen(trim(LOCAL_OVERRIDE_DIR)) > 0
            ? LOCAL_OVERRIDE_DIR : '';
        while (!empty($currentDir)) {
            $systemConfigFile = $currentDir . '/DirLocations.ini';
            $systemConfig = new Config(
                file_exists($systemConfigFile)
                    ? $this->getIniReader()->fromFile($systemConfigFile)
                    : []
            );
            array_unshift(
                $localDirs,
                [
                    'directory' => $currentDir,
                    'defaultConfigSubdir' =>
                        $systemConfig['Local_Dir']['config_subdir']
                        ?? $this->defaultLocalConfigSubdir,
                ]
            );

            $parentDir = '';
            if (!empty($systemConfig['Parent_Dir']['path'])) {
                $parentDir = $systemConfig['Parent_Dir']['path'];
                if ($systemConfig['Parent_Dir']['is_relative_path']) {
                    $parentDir = $currentDir . '/' . $parentDir;
                }
            }

            $currentDir = $parentDir;
        }
        return new $requestedName(
            [
                'directory' => APPLICATION_PATH,
                'defaultConfigSubdir' => $this->defaultBaseConfigSubdir,
            ],
            $localDirs
        );
    }
}
