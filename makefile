all:
	fd -tf . html -e html -x python main.py {/}

clean:
	fd -tf . html -e html -x rm -f {/}
