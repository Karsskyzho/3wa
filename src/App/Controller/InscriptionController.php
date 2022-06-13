<?php
namespace App\Controller;

use Library\Core\AbstractController;

class InscriptionController extends AbstractController{
    public function index(): void {

        $this->display(
            'inscription'
        );
    }
}