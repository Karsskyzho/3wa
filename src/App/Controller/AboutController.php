<?php

namespace App\Controller;

use Library\Core\AbstractController;

class AboutController extends AbstractController{
    public function index(): void {

        $this->display(
            'about'
        );
    }
}