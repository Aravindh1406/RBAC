import Event  from "../models/EventSchema";
import mongoose from "mongoose";

export const eventService = {
  createEvent: async (data: any, organizerId: mongoose.Types.ObjectId) => {
    return (await Event.create({ ...data, organizerId })).populate("organizerId", "name");
  },
  getEvents: async () => {
    return await Event.find();
  },
  deleteEvent: async (eventId: string, user: any) => {
    const event = await Event.findById(eventId);
    console.log(event);
    if (!event) throw new Error("Event not found");
    console.log(user.rolename);
    console.log(user.roleId);
    // if (user.rolename!== "organizer" || event.organizerId.toString() !== user.roleId) {
    //   throw new Error("Unauthorized to delete this event");
    // }

    await Event.findByIdAndDelete(eventId);
  },
};
