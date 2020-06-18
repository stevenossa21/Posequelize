import Project from '../models/Project'

export async function getProjects(req, res){
   try {
    const projects = await Project.findAll();

    res.json({
        data: projects
    });
   } catch (error) {
       console.log(error);
   }
};

export async function getOneProject(req, res){
  try {
    const { id } = req.params;  
    const project = await Project.findOne({
        where: {
            id: id
        }
    });

    res.json({
        data: project
    });
  } catch (error) {
      console.log(error);
      
  }
}

export async function deleteProject(req, res){
    const { id } = req.params;
    let deleteRowCount = await Project.destroy({
        where: {
            id: id
        }
    });

    res.json({
        message: 'Project deleted successfully',
        RowsCount: deleteRowCount
    });


}


export async function createProject(req, res) {
    const {
        name,
        priority,
        description,
        deliverydate
    } = req.body;
    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        }, {
            fields: ['name' , 'priority', 'description', 'deliverydate']
        });
        if (newProject) {
            res.json({
                message: 'Project created successfully',
                data: newProject
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Something goes wrong',
            data: {}
        })
    }
    console.log(req.body);
    res.send('Req body received ');
};

