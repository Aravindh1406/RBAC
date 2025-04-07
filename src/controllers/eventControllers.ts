import { Request, Response } from "express";
import { eventService } from "../services/eventServices";
import Event from "../models/EventSchema"; // Ensure this path is correct

interface AuthRequest extends Request {
  user?: any;
}
export const eventController = {
  // createEvent: async (req: AuthRequest, res: Response) => {
  //   try {
  //     const event = await eventService.createEvent(req.body, req.user?.id);
  //     res.status(201).json({ message: "Event created successfully", event });
  //   } catch (error: any) {
  //     res.status(400).json({ message: error.message });
  //   }
  // },  
  createEvent: async (req: AuthRequest, res: Response) => {
    try {
      const userId = req.user?.userId as any;
      const event = await eventService.createEvent(req.body, userId); // ✅
      res.status(201).json({ message: "Event created successfully", event });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },

  getEvents: async (req: Request, res: Response) => {
    try {
      const events = await eventService.getEvents();
      res.status(200).json({ message: "Events fetched successfully", events });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  deleteEvent: async (req: AuthRequest, res: Response) => {
    try {
      console.log(req.params.id, req.user);
      await eventService.deleteEvent(req.params.id, req.user)
      res.status(200).json({ message: "Event deleted successfully" });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
