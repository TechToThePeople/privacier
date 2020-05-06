# eu.tttp.privacier

![Screenshot](/images/screenshot.png)

This extension increases the privacy of civicrm

It does disable the open and click tracking options on civimail when creating a new mailing. 

You can change it and track either track or open, but when you re-open a draft mailing, it will warn you if the privacy settings are changed

The extension is licensed under [AGPL-3.0](LICENSE.txt).

## Requirements

* PHP v7.0+
* CiviCRM 5.x 

## Installation (Web UI)

This extension has not yet been published for installation via the web UI.

## Installation (CLI, Zip)

Sysadmins and developers may download the `.zip` file for this extension and
install it with the command-line tool [cv](https://github.com/civicrm/cv).

```bash
cd <extension-dir>
cv dl eu.tttp.privacier@https://github.com/TechToThePeople/privacier/archive/master.zip
```

## Installation (CLI, Git)

Sysadmins and developers may clone the [Git](https://en.wikipedia.org/wiki/Git) repo for this extension and
install it with the command-line tool [cv](https://github.com/civicrm/cv).

```bash
git clone https://github.com/TechToThePeople/privacier.git
cv en privacier
```

