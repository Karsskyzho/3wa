<?php

    namespace App\Controller;
    use App\Models\InscriptionManager;
    use Library\Core\AbstractController;

//use Library\Core\AbstractModel;

    class InscriptionController extends AbstractController
    {
        public function index(): void
        {
            function curlLabel($endpoint,$code): ?string { //fonction permettant d'aller chercher dans l'API gouv le nom en se servant du code contenu dans la valeur de l'input
                $url = "https://geo.api.gouv.fr/$endpoint/$code";
                $curl = curl_init($url);
                curl_setopt($curl, CURLOPT_URL, $url);
                curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
                curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

                $resp = curl_exec($curl);
                $result = json_decode($resp, true);
                curl_close($curl);

                if (!$result) {
                    return null;
                }
                return $result['nom'];
            }

            if (isset($_POST['name']) && isset($_POST['firstname']) && isset($_POST['birthday']) && isset($_POST['password']) && isset($_POST['email']) && isset($_POST['address']) && isset($_POST['city']) && isset($_POST['regions']) && isset($_POST['departements'])) {
                if (filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
                    if (strlen($_POST['password']) >= 8) {
                        if ($_POST['password'] === $_POST['password_confirm']) {

                            //--------------------------------------------------------------
                            $codeRegion = $_POST['regions'];
                            $endPoint = 'regions';
                            $region = curlLabel($endPoint, $codeRegion);
                            //--------------------------------------------------------------
                            $codeDepartement = $_POST['departements'];
                            $endPoint = 'departements';
                            $departement = curlLabel($endPoint, $codeDepartement);
                            //--------------------------------------------------------------
                            $codeCommune = $_POST['city'];
                            $endPoint = 'communes';
                            $commune = curlLabel($endPoint, $codeCommune);
                            //--------------------------------------------------------------
                            $user = new InscriptionManager($_POST['name'], $_POST['firstname'], $_POST['birthday'], $_POST['password'], $_POST['email'], $_POST['address'], $commune, $region, $departement);
                            $user->createUser();
                            //$user-> appeler les setters un par un plutôt que la fonction createUser.
                            header("location:/connectionUser");
                            exit();
                        } else echo "Les mots de passe ne sont pas identiques";
                    } else echo "le mot de passe doit contenir au moins 8 caractères";
                } else echo "Veuillez respecter le format standard d\'email";
            };
            $this->display(
                'inscription', [
                    'title' => 'Royalement'
                ]
            );
        }
    }