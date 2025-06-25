import pytest
def sum_func(a, b):
    return a + b

@pytest.mark.parametrize("x,y,result", [(1, 2, 3), (3, 4, 7), (4, 6, 10)])
def test_example(x, y, result):
    assert x + y == result
