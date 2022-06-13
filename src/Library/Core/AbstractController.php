<?php

namespace Library\Core;

class AbstractController
{
    public function display(string $template, array $data = []): void
    {
        // Transforme les clés du tableau $data en variable
        extract($data);

        // On inclut le layout
        require 'src/App/Views/layout.php';
    }
}