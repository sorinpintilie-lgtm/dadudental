export const base44 = {
  entities: {
    Appointment: {
      create: async (data) => {
        console.log('Creating appointment', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { id: Date.now(), ...data };
      }
    }
  }
};