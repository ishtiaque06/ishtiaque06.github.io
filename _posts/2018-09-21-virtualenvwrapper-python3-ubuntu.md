---
layout: post
title: How to Install Python 3 Virtual Environment Wrapper on Ubuntu 18.04 LTS
date: 2018-09-21 11:24:00 -0400
---

Hello! In this short tutorial I write out the steps to install one of the most useful productivity tools I've used for Python: `virtualenvwrapper`.

### The What:
Virtual Environment Wrapper, most commonly known as [`virtualenvwrapper`](https://virtualenvwrapper.readthedocs.io/en/latest/), is a nifty tool that you, as a Python developer,
can use to organize your virtual development environments.
With this powerful tool, you can create, list, manage and switch
between your development environment with ease.

### The Why:
While trying to install virtualenvwrapper on my new Kubuntu
  18.04LTS distro, I noticed that following the usual
  instructions on virtualenvwrapper's [Read the Docs page](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) doesn't exactly prove to be useful in installing
  virtualenvwrapper. It took me an hour to figure out how to
  install virtualenvwrapper so that it's fully functional. Thus
  this small article was born.

### The How:
Without further ado, let's jump into how I installed
`virtualenvwrapper` on my Kubuntu system running Python 3.
**Note:** The instructions here are for Python 3, but
they may work for Python 2 environments as well.

1. Install `pip3`. To check if you have `pip3` installed, open up a terminal (`Ctrl+Alt+T` should do the trick) and type: `$ pip3 --version`
  ```bash
  $ pip3 --version
  ```
  You should see something similar to this: `pip 9.0.1 from /usr/lib/python3/dist-packages (python 3.6)`
  If `pip3` is not installed, you can easily install it by running
  `$ sudo apt-get install python3-pip`
  on your terminal.
2. Install `virtualenvwrapper`:

    `$ pip3 install virtualenvwrapper`
3. Add the following lines to your `~/.bashrc` file:
    `export WORKON_HOME=$HOME/.virtualenvs`

    `export PROJECT_HOME=$HOME/Devel`

    `source ~/.local/bin/virtualenvwrapper.sh`

    `VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3`

    `PATH=$PATH:~/.local/bin`

    Once you do that, you should be all set to proceed to the next step.
4. Reload your `~/.bashrc` file: `$ source ~/.bashrc`. Check to see if you've got any errors.
5. Make a test virtual environment: `$ mkvirtualenv test`.

    The output should be similar to this:

    `Using base prefix '/usr`

    `New python executable in ~/.virtualenvs/test/bin/python3`

    `Also creating executable in ~/.virtualenvs/test/bin/python`

    `Installing setuptools, pip, wheel...done.`

    `(test) user@computer:~$`

    Notice the `(test)` before your username@computer, this indicates the `virtualenv` you're in at the moment.

Voila! Now you have a new `virtualenv` that is a fresh python build system. Hack away!

You can head over to `virtualenvwrapper`'s [documentation](https://virtualenvwrapper.readthedocs.io/en/latest/install.html) for all the helpful commands it offers.
