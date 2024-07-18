all:
	fd -tf . html -e html -x python main.py {/}
	mv ./home-salon.html ./index.html

clean:
	fd -tf . html -e html -x rm -f {/}

env:
	python3 -m venv env
	source env/bin/activate
	pip install --upgrade pip
	pip install jinja2 python-lsp-server
