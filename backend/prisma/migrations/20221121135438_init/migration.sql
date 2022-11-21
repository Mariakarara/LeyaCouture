-- CreateTable

CREATE TABLE
    `cart` (
        `id` INTEGER NOT NULL,
        `User_id` INTEGER NOT NULL,
        `delivery_firstName` VARCHAR(45) NOT NULL,
        `delivery_lastName` VARCHAR(45) NOT NULL,
        `delivery_adress` VARCHAR(45) NOT NULL,
        `delivery_postalCode` INTEGER NOT NULL,
        `delivery_city` VARCHAR(45) NOT NULL,
        `payment_type` INTEGER NOT NULL,
        `status_id` INTEGER NOT NULL,
        `delivery_price` INTEGER NOT NULL,
        `total_price` INTEGER NOT NULL,
        `date` DATE NOT NULL,
        INDEX `User_id_idx`(`User_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `category` (
        `id` INTEGER NOT NULL,
        `Robes` VARCHAR(255) NULL,
        `Accessoires` VARCHAR(255) NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `many_product_cart` (
        `id` INTEGER NOT NULL,
        `cart_id` INTEGER NOT NULL,
        `product_id` INTEGER NOT NULL,
        INDEX `cart_id_idx`(`cart_id`),
        INDEX `product_id_idx`(`product_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `many_product_order` (
        `id` INTEGER NOT NULL,
        `product_id` INTEGER NOT NULL,
        `order_id` INTEGER NOT NULL,
        INDEX `order_id_idx`(`order_id`),
        INDEX `product_id_idx`(`product_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `material` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `Cotton` VARCHAR(45) NULL,
        `Satin` VARCHAR(45) NULL,
        `Sythetic` VARCHAR(45) NULL,
        `Lin` VARCHAR(45) NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `order` (
        `id` INTEGER NOT NULL,
        `User_id` INTEGER NOT NULL,
        `delivery_firstName` VARCHAR(45) NOT NULL,
        `delivery_lastName` VARCHAR(45) NOT NULL,
        `delivery_adress` VARCHAR(45) NOT NULL,
        `delivery_postalCode` INTEGER NOT NULL,
        `delivery_city` VARCHAR(45) NOT NULL,
        `payment_type` INTEGER NOT NULL,
        `delivery_price` INTEGER NOT NULL,
        `total_price` INTEGER NOT NULL,
        `date` DATE NOT NULL,
        INDEX `User_id_idx`(`User_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `product` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `Title` VARCHAR(45) NOT NULL,
        `Image1` VARCHAR(45) NOT NULL,
        `Image2` VARCHAR(45) NOT NULL,
        `Price` DECIMAL(10, 2) NOT NULL,
        `Age` DECIMAL(2, 0) NOT NULL,
        `Description` TEXT NOT NULL,
        `Material_id` INTEGER NOT NULL,
        `Category_id` INTEGER NOT NULL,
        `Color` TEXT NOT NULL,
        INDEX `Category_id_idx`(`Category_id`),
        INDEX `Material_id_idx`(`Material_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `rate_comment` (
        `id` INTEGER NOT NULL,
        `Rate_id` INTEGER NULL,
        `User_id` INTEGER NULL,
        `Product_id` INTEGER NULL,
        `Comment` TEXT NULL,
        `isVisible` TINYINT NULL,
        INDEX `Product_id_idx`(`Product_id`),
        INDEX `Rate_id_idx`(`Rate_id`),
        INDEX `User_id_idx`(`User_id`),
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `rates` (
        `id` INTEGER NOT NULL,
        `Note` INTEGER NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable

CREATE TABLE
    `user` (
        `id` INTEGER NOT NULL,
        `email` VARCHAR(45) NULL,
        `isAdmin` BOOLEAN NULL,
        `FirstName` VARCHAR(45) NULL,
        `LastName` VARCHAR(45) NULL,
        `PostalCode` VARCHAR(45) NULL,
        `City` INTEGER NULL,
        `Password word` VARCHAR(45) NULL,
        PRIMARY KEY (`id`)
    ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey

ALTER TABLE `cart`
ADD
    CONSTRAINT `FK_cartUser_id` FOREIGN KEY (`User_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE
    `many_product_cart`
ADD
    CONSTRAINT `FK_cart_id` FOREIGN KEY (`cart_id`) REFERENCES `cart`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE
    `many_product_cart`
ADD
    CONSTRAINT `FK_manyproduct_id` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE
    `many_product_order`
ADD
    CONSTRAINT `FK_manyorderproduct_id` FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE
    `many_product_order`
ADD
    CONSTRAINT `FK_order_id` FOREIGN KEY (`order_id`) REFERENCES `order`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `order`
ADD
    CONSTRAINT `FK_User_id` FOREIGN KEY (`User_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `product`
ADD
    CONSTRAINT `FK_Category_id` FOREIGN KEY (`Category_id`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `product`
ADD
    CONSTRAINT `FK_Material_id` FOREIGN KEY (`Material_id`) REFERENCES `material`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `rate_comment`
ADD
    CONSTRAINT `FK_Product_id` FOREIGN KEY (`Product_id`) REFERENCES `product`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `rate_comment`
ADD
    CONSTRAINT `FK_Rate_id` FOREIGN KEY (`Rate_id`) REFERENCES `rates`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey

ALTER TABLE `rate_comment`
ADD
    CONSTRAINT `FK_commentUser_id` FOREIGN KEY (`User_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;