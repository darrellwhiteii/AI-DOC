import tkinter as tk

root = tk.Tk()
root.title("Hello World GUI")

label = tk.Label(root, text="Hello World", font=("Arial", 24))
label.pack(pady=20)

button = tk.Button(root, text="Click me!", command=root.quit)
button.pack(pady=10)

root.mainloop()
