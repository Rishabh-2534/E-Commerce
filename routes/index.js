import path from "path";
import fs from "fs";
import {fileURLToPath} from "url";
import cartRoutes from "./cart.routes.js";
import categoryRoutes from "./category.routes.js";
import  orderRoutes from "./order.routes.js";
import productRoutes from "./product.routes.js";
import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";


const filename= fileURLToPath(import.meta.url);
const dirName= path.dirname(filename);

export default function loadRoutes(app){
   /* const routersPath = path.join(dirName);
    fs.readdirSync(routersPath).forEach((file)=>{
        if(file.endsWith(".routes.js")&&file!=="index.js"){
            const routerModule= require(path.join(routersPath,file));
            const basePath= "/"+file.replace(".routes.js","");
            app.use(basePath,routerModule.default||routerModule);
        }
    });*/
    app.use("/cart", cartRoutes);
    app.use("/category", categoryRoutes);
    app.use("/order", orderRoutes);
    app.use("/product", productRoutes);
    app.use("/user",userRoutes);
    app.use("/auth",authRoutes);
}

