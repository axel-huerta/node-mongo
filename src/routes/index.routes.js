import { Router } from "express" //funtion
const router = Router()

router.get("/", (req, res)=>{
    res.render()
    //res.send("<h1>Hello Word<h1/>");
});
router.get("/about", (req, res)=>{
    res.send("about");
});
export default router;