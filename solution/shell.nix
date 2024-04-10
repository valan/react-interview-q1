{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = [
    pkgs.corepack_20
    pkgs.nodejs_20
  ];
}
