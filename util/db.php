<?php
require_once ROOT . '/util/error_func.php';
class Database {
	static $instance;
	public static function getInstance() {
		if (!isset(self::$instance)) {
			self::$instance =  mysqli_connect("localhost","root","","kyoto") or die('{"error_number":"0"}');
			self::$instance->set_charset("utf8");
		}
		return self::$instance;
	}

}
