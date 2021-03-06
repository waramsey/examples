
import BackAndForth from "./../behavior/BackAndForth.js";
import None from "./../behavior/None.js"
import Agent from "./Agent.js"
import attending from "../data/attending.js"
import greeterNurse from "../data/greeterNurse.js"
import patient from "../data/patient.js"


class MedicalAgent {
  startX;
  startY;
  startZ;
  destX;
  destY;
  destZ;
  startMSec;
  inSimulation = false;
  hasEntered = false;
  behavior;

  static index = 0;
  idx; //Corresponds to the internal idx number used by recast

  constructor(agent, locations) {
    this.name = agent.name;
    this.locations = locations;
    agent.locations = locations;
    this.startMSec = agent.arrivalTick * 25; // We simulate 25 fps
    this.arrivalLocation = agent.arrivalLocation;
    this.age = agent.age;
    this.severity = agent.severity;
    this.patientName = agent.patientName;
    this.gender = agent.gender;
    this.id = agent.id;

    let startLocation = locations.find(i => i.name == agent.arrivalLocation);
    if (!startLocation) console.error("Bad starting location " + agent.arrivalLocation);


    this.startX = startLocation.position.x
    this.startY = startLocation.position.y;
    this.startZ = startLocation.position.z;

    this.destX = 0;
    this.destY = 0;
    this.destZ = 0;

    //this.startMSec = Math.floor(parseFloat(splits[1]));

    ///Now check to see what behavior this agent should receive
    // if (splits.length == 8 || splits[8].trim() == "" || splits[8].trim().toLowerCase() == "none") //i.e. there is no behavior specification
    //   this.behavior = new None(Agent.index++);
    // else {
    //   //In this case we have to figure it out
    //   //The behavior is determined by the first word after the comma. Everything else can be a argument in the constructor
    //   let behave = splits[8].trim().toLowerCase();
    //   if (behave == "back")
    //     this.behavior = new BackAndForth(Agent.index++, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ]);
    // }


    if (agent.name == "patient") {
      this.behavior = new patient(agent, agent.id, null, null);
    }
    /*
    else if(medicianType == MedicianClass.DOCTOR) {
        if(medicianSubclass == MedicianSubclass.ATTENDING)
          reader = new BufferedReader(new FileReader("./data/attending.tree"));
        else if(medicianSubclass == MedicianSubclass.RESIDENT)
          reader = new BufferedReader(new FileReader("./data/responsibility.tree"));
    }
    else if(medicianType == MedicianClass.TECH){
        if(medicianSubclass == MedicianSubclass.CT)
          reader = new BufferedReader(new FileReader("./data/ct.tree"));
        else if(medicianSubclass == MedicianSubclass.JANITORIAL)
          reader = new BufferedReader(new FileReader("./data/janitorial.tree"));
        else if(medicianSubclass == MedicianSubclass.RADIOLOGY)
          reader = new BufferedReader(new FileReader("./data/radiology.tree"));
        else
          reader = new BufferedReader(new FileReader("./data/responsibility.tree"));
    }
    
    else if(medicianType == MedicianClass.NURSE)
    */
    else {
      if (agent.name == "Tech") {
        this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        if (agent.type == "Tech")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else if (agent.type == "CT")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else if (agent.type == "Janitorial")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else if (agent.type == "Radiology")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else
          throw new "That tech type does not exist " + agent.type;

      }
      else if (agent.name == "Nurse") {
        if (agent.type == "Triage Nurse")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else if (agent.type == "Nurse")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else if (agent.type == "Greeter Nurse")
          this.behavior = new greeterNurse(agent, agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else
          throw new "That nures type does not exist " + agent.type;
      }
      else if (agent.name == "Attending") {
        if (agent.type == "Attending")
          this.behavior = new attending(agent, agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else
          throw new "That attending type does not exist " + agent.type;
      }
      else if (agent.name == "Resident") {
        if (agent.type == "Resident")
          this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
        else
          throw new "That resident type does not exist " + agent.type;
      }
      else {
        throw new "The agent name of " + agent.name + " is not a valid agent name."
      }
      //This is where we assign behaviors based on medical position type

      /*
      else if(medicianSubclass == MedicianSubclass.GREETER_NURSE)
					reader = new BufferedReader(new FileReader("./data/greeterNurse.tree"));
			else if(medicianSubclass == MedicianSubclass.NURSE)
					reader = new BufferedReader(new FileReader("./data/responsibility.tree"));
      */
      // else {
      //   this.behavior = new BackAndForth(agent.id, [this.startX, this.startY, this.startZ], [this.destX, this.destY, this.destZ])
      // }
    }
  }


  getStart() { return [this.startX, this.startY, this.startZ]; }

  getEnd() { return [this.destX, this.destY, this.destZ]; }

  setId(i) { this.id = i; }

  getId() { return this.id; }

  getStartMSec() { return this.startMSec; }
  /**
   * If current agent is active, update its newDestination to App() class's update method
   */
  isActive() { return active; }
  setActive(active) { this.active = active; }
}

export default MedicalAgent;