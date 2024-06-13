# Nome do executável
TARGET = MeuProjeto

# Diretórios
SRC_DIR = src
INCLUDE_DIR = include
BUILD_DIR = build

# Arquivos fonte
SRCS = $(wildcard $(SRC_DIR)/*.cpp)

# Arquivos objeto
OBJS = $(SRCS:$(SRC_DIR)/%.cpp=$(BUILD_DIR)/%.o)

# Compilador
CXX = g++
CXXFLAGS = -I$(INCLUDE_DIR) -g -Wall -std=c++11

# Regras
.PHONY: all build run clean br

all: build

build: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(CXXFLAGS) -o $@ $^

$(BUILD_DIR)/%.o: $(SRC_DIR)/%.cpp
	@mkdir -p $(BUILD_DIR)
	$(CXX) $(CXXFLAGS) -c $< -o $@

run: build
	./$(TARGET)

br: build run

clean:
	rm -rf $(BUILD_DIR) $(TARGET)
