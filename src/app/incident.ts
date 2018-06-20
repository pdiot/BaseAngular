export class Incident {

  public progressType: string;

  constructor(
    public id: number,
    public dateCreation: Date,
    public dateModification: Date,
    public description: string,
    public email: string,
    public is_open: boolean,
    public level: number,
    public progress: number,
    public titre: string,
    public type: number
  ) {
    this.dateCreation = new Date(dateCreation);
    this.dateModification = new Date(dateModification);
    this.setProgressType();
  }

  setProgressType(): void {
    if (this.progress < 25) {
      this.progressType = 'danger';
    } else if (this.progress < 50) {
      this.progressType = 'warning';
    } else if (this.progress < 75) {
      this.progressType = 'info';
    } else {
      this.progressType = 'success';
    }
  }
}
