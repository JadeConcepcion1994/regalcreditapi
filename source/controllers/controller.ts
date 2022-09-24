import { Request, Response, NextFunction } from 'express';


const dataArray = 
[
    {
        "id" : 1,
        "color" : "Red",
        "animal" : "Fish",
    },
    {
        "id" : 2,
        "color" : "Blue",
        "animal" : "Fox",
    },
    {
        "id" : 3,
        "color" : "White",
        "animal" : "Tiger",
    },
];

// getting all array
const getArrayData = async (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: dataArray
    });
};

// getting a array
const getArraySingle = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    let showThis = Number(req.params.id);
    var index = dataArray.map(x => {
      return x.id;
    }).indexOf(showThis);

    const selectedArray = {
        "id" : showThis,
        "animal" : dataArray[index].animal,
        "color" : dataArray[index].color
    }

    return res.status(200).json({
        message: selectedArray
    });
};


// updating an array
const updateArrayData = async (req: Request, res: Response, next: NextFunction) => {

    let updateThis = Number(req.params.id);
    var index = dataArray.map(x => {
      return x.id;
    }).indexOf(updateThis);

    // get the data from req.body
    let animal: string = req.body.animal;
    let color: string = req.body.color;

    if(animal == null || color == null){
        return res.status(400).json({
            message: "unable to update due to empty array values",
        });
    }else{
        dataArray[index].animal = animal;
        dataArray[index].color = color;
        return res.status(200).json({
            message: 'array updated',
            response: dataArray
        });
    }

};

// deleting an array
const deleteArrayData = async (req: Request, res: Response, next: NextFunction) => {
    let removeThis = Number(req.params.id);
    var index = dataArray.map(x => {
      return x.id;
    }).indexOf(removeThis);
    dataArray.splice(index, 1);
    return res.status(200).json({
        message: 'array deleted successfully',
        response: dataArray
    });

};

// adding an array
const addArrayData = async (req: Request, res: Response, next: NextFunction) => {
    const lastTeamIndex = dataArray.length - 1;
    const lastId = dataArray[lastTeamIndex].id;
    let id = lastId + 1;

    // get the data from req.body
    let animal: string = req.body.animal;
    let color: string = req.body.color;

    if(animal == null || color == null){
        return res.status(400).json({
            message: "empty array values",
        });
    }else{
        const newArray = {
            "id" : id,
            "animal" : animal,
            "color" : color
        }
        dataArray.push(newArray);
        return res.status(200).json({
            message: newArray,
            response: dataArray
        });
    }

};

export default { getArrayData, getArraySingle, updateArrayData, deleteArrayData, addArrayData };