---
layout: post
title: "More Examples"
date: 2016-02-16 14:04:00 -0600
---
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.

To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>.

## Python code example

{% highlight python %}
def fibonacci_number(n):
    """Return the nth number in the Fibonacci series.

    Each number in the Fibonacci series is equal to the sum of the
    preceding two numbers:

        1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...

    :param n: The position in the Fibonacci series whose value will be returned
    :rtype: ``int``

    >>> fibonacci_number(6)
    8

    """
    a, b = 1, 1
    for _ in xrange(n - 1):
        a, b = b, a + b
    return a
{% endhighlight %}
