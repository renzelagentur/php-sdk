<?php
namespace Econda\RecEngine\Base;

use Econda\RecEngine\Exception\InvalidArgumentException;

/**
  * User: christoph.luetjen
  */

trait StandardConstructorTrait
{
    protected function initPropertiesFromArray($data)
    {
        if(!is_array($data)) {
            throw new InvalidArgumentException("Constructor expects an array of properties with their values.");
        }
        foreach($data as $key => $value) {
            $setterName = 'set' . ucfirst($key);
            if(!method_exists($this, $setterName)) {
                throw new InvalidArgumentException("No setter found for property with name: " . $key);
            }
            $this->$setterName($value);
        }
    }
}