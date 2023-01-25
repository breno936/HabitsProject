-- CreateTable
CREATE TABLE "product_categoria" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_product" TEXT NOT NULL,
    "id_categoria" TEXT NOT NULL,
    CONSTRAINT "product_categoria_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "product_categoria_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
