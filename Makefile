all: main

main: src/main.cpp src/classes/ClasseBase.cpp
    g++ -o main src/main.cpp src/classes/ClasseBase.cpp

clean:
    rm -f main
