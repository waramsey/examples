class APerson extends AThing {
	
	APerson(location, UUID, arrivalTick) {
		super(location);
		this.UUID = UUID;
		this.arrivalTick = arrivalTick;	
	}

    personLivingState = "ALIVE"; //PersonLivingState
    arrivalTick; // int
	idx; // int
	destination; //Point3 -> Vector3
	removeFromSimulationFlage = false; // boolean
	UUID; // int
	assignedRoom; // IRoom -> ARoom
	moving = true; // boolean
	
	get Moving() {
		return this.moving;
	}

	set Moving(moving) {
		this.moving = moving;
	}

	//protected Queue<Object> queue = new LinkedList<Object>();
    // Linked list in js?
    queue = [];

	get UUID() {
		return this.UUID;
	}

	set UUID(uUID) {
		this.UUID = uUID;
	}

	get RemoveFromSimulationFlag() {
		return this.removeFromSimulationFlage;
	}

	set RemoveFromSimulationFlage(removeFromSimulationFlage) {
		this.removeFromSimulationFlage = removeFromSimulationFlage;
	}

	get Destination() {
		return this.destination;
	}

	set Destination(destination) {
		this.destination = destination;
	}

	get Idx() {
		return this.idx;
	}

	set Idx(idx) {
		this.idx = idx;
	}

    get ArrivalTick() {
		return this.arrivalTick;
	}

	set ArrivalTick(arrivalTick) {
		this.arrivalTick = arrivalTick;
	}

	get PersonLivingState() {
		return this.personLivingState;
	}

	set PersonLivingState(personLivingState) {
		this.personLivingState = personLivingState;
	}

	update() {
		// TODO Auto-generated method stub
		
	}
	
	get AssignedRoom() {
		return this.assignedRoom;
	}

	set AssignedRoom(assignedRoom) {
		this.assignedRoom = assignedRoom;
	}
	
	pop() {
		return this.queue.remove();
	}
	
	push(object) {
		this.queue.add(object);
		
	}

}