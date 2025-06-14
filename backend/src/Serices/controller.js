import ServiceRepository from "./repository.js";
export default class ServiceController {
  static async postService(req, res) {
    try {
      const { service, date, worktype, description } = req.body;
      const bookedservice = await ServiceRepository.postService({ service, user: req.userID, date, worktype, description });

      res.status(200).json({
        message: 'Service posted successfully',
        service: bookedservice
      });
    } catch (error) {

      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }
  static async getAllServicebyUserId(req, res) {
    try {
      const user = req.userID;
      if (!user) {
        return res.status(400).json({ message: 'User is not exist' });
      }
      // Fetch all services for the user
      const services = await ServiceRepository.getAllService(user);
      if (!services || services.length === 0) {
        return res.status(404).json({ message: 'No services found', services: [] });
      }
      return res.status(200).json({
        message: 'Services retrieved successfully',
        services: services
      });
    } catch (error) {

      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  }
}