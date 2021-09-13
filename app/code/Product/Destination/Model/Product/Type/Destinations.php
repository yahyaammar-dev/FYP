<?php

namespace Product\Destination\Model\Product\Type;

class Destinations extends \Magento\Catalog\Model\Product\Type\AbstractType 
{
       /**
    * Delete data specifically for new product type
    *
    * @param \Magento\Catalog\Model\Product $product
    * @return void
    */
   public function deleteTypeSpecificData(\Magento\Catalog\Model\Product $product)
   {
        // method intentionally empty
   }
}