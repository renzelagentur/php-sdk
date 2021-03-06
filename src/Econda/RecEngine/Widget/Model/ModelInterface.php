<?php
/**
 * econda recommendations client library
 *
 * @copyright Copyright econda GmbH
 * @link http://www.econda.de
 * @package Econda/RecEngine
 * @license MIT License
 */
namespace Econda\RecEngine\Widget\Model;

/**
 * This functions are required if we want to use this as model for widget renderer 
 */
interface ModelInterface
{
	/**
	 * Get widget title
	 * @return string
	 */
	public function getTitle();
	
	/**
	 * Get array of products
	 * @return array
	 */
	public function getProducts();
	
	/**
	 * True if this widget should not be displayed if there are no products to show
	 * @return true
	 */
	public function getDisableIfEmpty();

    /**
     * Get index of first product result, starting with 0.
     * @return int
     */
    public function getStartIndex();
}