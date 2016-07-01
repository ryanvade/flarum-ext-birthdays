import Modal from 'flarum/components/Modal';
import Button from 'flarum/components/Button'


export default class ChangeBirthdayModal extends Modal {
  init() {
    super.init();
    this.success = false;
    this.birthday = m.prop(app.session.user.birthday());
  }

  className() {
    return 'ChangeBirthdayModal Modal--small';
  }

  title() {
    return "Change your Birthday";
  }

  content() {
    if (this.success) {
      return (
        <div className="Modal-body">
          <div className="Form Form--centered">
            <p className="helpText">"Change your birthday"</p>
            <div className="Form-group">
              <Button className="Button Button--primary Button--block" onclick={this.hide.bind(this)}>
                Commit
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <input type="date" name="date" className="FormControl"
              placeholder={app.session.user.birthday()}
              value={this.birthday()}
              onchange={m.withAttr('value', this.birthday)}
              disabled={this.loading}/>
          </div>
          <div className="Form-group">
            {Button.component({
              className: 'Button Button--primary Button--block',
              type: 'submit',
              loading: this.loading,
              children: "Change Birthday"
            })}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();
    if (this.birthday() === app.session.user.birthday()) {
      this.hide();
      return;
    }

    this.loading = true;

    app.session.user.save({birthday: this.birthday()}, {errorHandler: this.onerror.bind(this)})
      .then(() => this.success = true)
      .finally(this.loaded.bind(this));
  }
}
