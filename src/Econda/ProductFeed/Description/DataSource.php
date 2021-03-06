<?php
namespace Econda\ProductFeed\Description;

class DataSource
{
	/**
	 * Uri of datasource 
	 * @var string
	 */
	protected $uri;
	
	const REQUEST_TYPE_POST = 'post';
	const REQUEST_TYPE_GET = 'get';
	
	/**
	 * Access files using GET or POST?
	 * @var string
	 */
	protected $requestType = "POST";
	
	/**
	 * Parameters to add to http requests
	 * @var unknown
	 */
	protected $requestParams;
	
	const AUTH_TYPE_NONE = 'none';
	const AUTH_TYPE_HTTP_BASIC_AUTH = 'http-basic-auth';
	
	/**
	 * Auth type
	 * @var string
	 */
	protected $authType;
	
	const TYPE_PRODUCT_LIST = 'product-list';
	const TYPE_CATEGORY_TREE = 'category-tree';
	
	/**
	 * category list or product feed?
	 * @var string
	 */
	protected $type;
	

}