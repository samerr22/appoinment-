import Appointment from '../models/ap.model.js';
import Doctor from '../models/docter.model.js';

// Create an appointment
export const createAppointment = async (req, res) => {
  try {
    const { patientName, doctorName, appointmentDate, appointmentTime } = req.body;
    
    const newAppointment = new Appointment({
      patientName,
      doctorName,
      appointmentDate,
      appointmentTime,
    });

    await newAppointment.save();
    return res.status(201).json({ message: 'Appointment created successfully', newAppointment });
  } catch (error) {
    return res.status(400).json({ message: 'Error creating appointment', error: error.message });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(400).json({ message: 'Error fetching appointments', error: error.message });
  }
};

// Get a single appointment by ID
export const getAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(400).json({ message: 'Error fetching appointment', error: error.message });
  }
};

// Update an appointment
export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    return res.status(200).json({ message: 'Appointment updated successfully', updatedAppointment });
  } catch (error) {
    return res.status(400).json({ message: 'Error updating appointment', error: error.message });
  }
};

// Delete an appointment
export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(id);
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    return res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    return res.status(400).json({ message: 'Error deleting appointment', error: error.message });
  }
};





export const createdocter = async (req, res) => {
  try {
    const { Docdate,
      doctorName,
      Time} = req.body;
    
    const newAppointment = new Doctor({
      Docdate,
      doctorName,
      Time
    });

    await newAppointment.save();
    return res.status(201).json({ message: 'Appointment created successfully', newAppointment });
  } catch (error) {
    return res.status(400).json({ message: 'Error creating appointment', error: error.message });
  }
};

// Get all appointments
export const getdoctor = async (req, res) => {
  try {
    const appointments = await Doctor.find();
    return res.status(200).json(appointments);
  } catch (error) {
    return res.status(400).json({ message: 'Error fetching appointments', error: error.message });
  }
};




