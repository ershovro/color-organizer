import { Router } from 'express';
import {addColor, rateColor, removeColor} from '../actionCreators.js';

const router = Router();

const dispatchAndRespond = (req, res, action) => {
   req.store.dispatch(action)
   res.status(200).json(action)
};

router.get("/colors", (req, res) =>
   res.status(200).json(req.store.getState().colors)
);

router.post("/colors", (req, res) =>
   dispatchAndRespond(
      req,
      res,
      addColor(req.body.title, req.body.color)
   )
);

router.put("/color/:id", (req, res) =>
   dispatchAndRespond(
      req,
      res,
      rateColor( req.params.id, parseInt(req.body.rating) )
   )
);

router.delete("/color/:id", (req, res) =>
   dispatchAndRespond(
      req,
      res,
      removeColor(req.params.id)
   )
);

export default router
