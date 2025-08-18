from game import Game

def get_user_menu_choice():
    print("\n Menu:")
    print("(g) Play a new game")
    print("(s) Show scores")
    print("(q) Quit")

    choice = input("Enter your choice: ").lower()
    if choice in ["g", "s", "q"]:
        return choice
    else:
        print("Invalid choice. Try again.")
        return None
def print_results(results):
    print("Game Summary:")
    print(f"Wins: {results['win']}")
    print(f"Losses: {results['loss']}")
    print(f"Draws: {results['draw']}")
    print("Thanks for playing!")

def main():
    results = {"win": 0, "loss": 0, "draw": 0}
    while True:
        choice = get_user_menu_choice()
        if choice == "g":
            game = Game()
            result = game.play()
            results[result] += 1
        elif choice == "s":
            print_results(results)
        elif choice == "q":
            print_results(results)
            break

if __name__ == "__main__":
    main()