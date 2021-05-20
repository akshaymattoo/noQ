import {NextApiRequest,NextApiResponse} from 'next';
import mongoose from "mongoose";
import QRCode from "../../../model/qrcode"

export default (req: NextApiRequest, res:NextApiResponse) => {
    if(req.method === "POST"){
        const body = req.body;
        mongoose
        .connect(process.env.dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log("Succesfully connected to db");
        })
        .catch((err) => console.log(err));

        const qrcode = new QRCode(
            { 
                name: body.name,
                number:body.number,
                code:makeid(6) ,
                createdAt:new Date().toUTCString()
            }
        );
        qrcode.save(function (err,data) {
            if (err){ 
                console.error(err);
                return res.send(err);
            }
            console.log("Saved in db ",data)
            res.json({success:true})
        });
    }
}

function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}