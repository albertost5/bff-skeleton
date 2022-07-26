import AbstractController from "../abstracts/abstract.controller";
import BackendControllerExample from '../routes/controllers/backend.controller';


const registry: AbstractController[] = new Array<AbstractController>();

// Register your controller here
registry.push(new BackendControllerExample);
console.log("All the controllers are registered successfully...");

export default { registry };