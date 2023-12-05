class Task {
    constructor(name) {
        this.id = self.crypto.randomUUID()
        this.name = name;
        this.open = true;
        this.date = Date.now()
    }
}