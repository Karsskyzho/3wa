<?php

    namespace App\Controller;

    use Library\Core\AbstractController;
    use App\Models\ProductsManager;


    class UpdateController extends AbstractController
    {
        public function index(): void
        {
            function ModifyProfil(): void
            {
                $this->display(
                    'modifyProfil', [
                    'title' => 'Royalement Français - Modifier votre profil',
                ]);
            }
        }
    }
