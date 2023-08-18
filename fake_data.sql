INSERT INTO `order` (`id`, `createDate`, `status`, `client`, `shippingAddress`, `shippingPromise`) VALUES
(1, '2023-08-16 10:00:00', 'Approve', 'Client 1', 'Address 1', '2023-08-19 10:00:00'),
(2, '2023-08-14 11:00:00', 'Cancel', 'Client 2', 'Address 2', '2023-08-06 11:00:00'),
(3, '2023-08-15 12:00:00', 'Delivery', 'Client 3', 'Address 3', '2023-08-07 12:00:00'),
(4, '2023-08-16 13:00:00', 'Traveling', 'Client 4', 'Address 4', '2023-08-08 13:00:00'),
(5, '2023-08-14 14:00:00', 'Approve', 'Client 5', 'Address 5', '2023-08-19 14:00:00');

INSERT INTO `item` (`id`, `title`, `description`, `url`, `price`, `quantity`, `orderId`) VALUES
(1, 'Item 1', 'Description 1', 'http://example.com/1', 100.00, 1, 1),
(2, 'Item 2', 'Description 2', 'http://example.com/2', 200.00, 2, 1),
(3, 'Item 3', 'Description 3', 'http://example.com/3', 300.00, 3, 2),
(4, 'Item 4', 'Description 4', 'http://example.com/4', 400.00, 4, 2),
(5, 'Item 5', 'Description 5', 'http://example.com/5', 500.00, 5, 3),
(6, 'Item 6', 'Description 6', 'http://example.com/6', 600.00, 6, 3),
(7, 'Item 7', 'Description 7', 'http://example.com/7', 700.00, 7, 4),
(8, 'Item 8', 'Description 8', 'http://example.com/8', 800.00, 8, 4),
(9, 'Item 9', 'Description 9', 'http://example.com/9', 900.00, 9, 5),
(10, 'Item 10', 'Description 10', 'http://example.com/10', 1000.00, 10, 5);
