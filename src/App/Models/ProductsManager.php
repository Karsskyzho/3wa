<?php

    namespace App\Models;

    use Library\Core\AbstractModel;

    class ProductsManager extends AbstractModel
    {

        public function getProducts(): array
        {

            return $this->db->getResults('SELECT * FROM products');
        }

        public function getFeaturedProducts(): array
        {
            return $this->db->getResults('SELECT * FROM products WHERE feature = "true" ');
        }

        public function showProducts(): array
        {
            return $this->db->getResults('SELECT * FROM products WHERE id = ' . $_GET['id']);
        }
    }
