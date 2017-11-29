<?php
	$name = $_POST['user-name'];
	$phone = $_POST['phone-number'];	
	$street = $_POST['street'];	
	$house = $_POST['house'];
	$housePart = $_POST['house-part'];
	$flat = $_POST['flat'];
	$floor = $_POST['floor'];
	$comment = $_POST['comment'];	
	$pay = $_POST['pay'];
	$disturb = $_POST['call-checkbox']; // 1 или null 
	$disturb = isset($disturb) ? 'НЕТ' : 'ДА'; 
		
	$mail_message = '
    <html>
        <head>
            <title>Заявка</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя: ' . $name . '</li>
                <li>Номер телефона: ' . $phone . '</li>
                <li>Улица: ' . $street . '</li>
				<li>Дом: ' . $house . '</li>
				<li>Корпус: ' . $housePart . '</li>
				<li>Квартира: ' . $flat . '</li>
				<li>Этаж: ' . $floor . '</li>
				<li>Комментарий: ' . $comment . '</li>
				<li>Способ оплаты: ' . $pay . '</li>
                <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
            </ul>
        </body>
    </html>    
	';
		
	$headers = "From: Администратор сайта <admin@loftschool.com>\r\n".
	"MIME-Version: 1.0" . "\r\n" .
	"Content-type: text/html; charset=UTF-8" . "\r\n";

	$mail = mail('nnv2698@gmail.com', 'Заказ', $mail_message, $headers);
	$data = [];
	if ($mail) {
			$data['status'] = "OK";
			$data['mes'] = "Сообщение отправлено";
	}else{
			$data['status'] = "NO";
			$data['mes'] = "На сервере произошла ошибка";
	}
	echo json_encode($data);
?>