<?php

class ConnectionController {
    public function index() {
        $title = 'Royalement Français - Mon compte';
        $template = 'Views/connection.php';
        require 'src/App/Views/layout.php';
    }
}