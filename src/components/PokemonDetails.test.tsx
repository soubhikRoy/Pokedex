import React from "react";
import { render, screen } from "@testing-library/react";
import PokemonDetails from "./PokemonDetails";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("PokemonDetails", () => {
    it("should render the pokemon details", () => {
        render(<PokemonDetails
            sprites={{ front_default: "url" }}
            name="Pikachu"
            height={4}
            weight={60}
            type="Electric"
            abilities={["Static", "Lightning Rod"]}
            moves={["Quick Attack", "Thunderbolt"]}
        />)
        expect(screen.getByText("Pikachu")).toBeInTheDocument()
    });
    it("should render the pokemon details - 1", () => {
        render(<PokemonDetails
            sprites={{ front_default: "url" }}
            name="Pikachu"
            height={4}
            weight={60}
            type="Electric"
            abilities={["Static", "Lightning Rod"]}
            moves={["Quick Attack", "Thunderbolt"]}
        />)
        expect(screen.getAllByTestId("pokemon-details")).toHaveLength(2)
    });
});