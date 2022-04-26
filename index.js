window.onload = function () {
    let text = `def unicode_to_string(string):
    new_string = list(string)
    temp = []
    i1 = 0
    i2 = 4

    if len(string) % 4 != 0:
        return string

    while i2 != (len(string) + 4):
        temp.append(''.join(new_string[i1:i2]))
        i1 += 4
        i2 += 4

    new_list = []
    for i in temp:
        new_list.append(f'\\\\u{i}')

    unicode_string = bytes(''.join(new_list), 'utf-8')
    try:
        return unicode_string.decode('unicode-escape')
    except UnicodeDecodeError:
        return string
`

    let i = 0;
    let speed = 30;

    function typeWriter() {
      if (i < text.length) {
        document.getElementById("code").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }
    typeWriter()
}
