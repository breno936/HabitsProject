import { Router } from "express";
import { CreateProductController } from "./controllers/createProductController";
import { CreateCategoriaController } from "./controllers/createCategoriaController";
import { CreateProductCategoriaController } from "./controllers/createProductCategoriaController";
import { CreateProductCategoriaExistsController} from "./controllers/createProductWithExistsCategory";
import { FindProductController } from "./controllers/findProductController";
import { FindCategoriaController } from "./controllers/findCategoryController";

const router = Router();

const createProduct = new CreateProductController();
const createCategoria = new CreateCategoriaController();
const createProductCategoria = new CreateProductCategoriaController();
const createProductExistsCategory = new CreateProductCategoriaExistsController();
const findProductController = new FindProductController();
const findCategoriaController = new FindCategoriaController();

router.post("/product", createProduct.handle);
router.post("/categoria", createCategoria.handle);
router.post("/productCategoria", createProductCategoria.handle);
router.post("/categoryExists", createProductExistsCategory.handle);
router.get("/findProduct/:id", findProductController.handle);
router.get("/findCategory/:id", findCategoriaController.handle);

export {router};