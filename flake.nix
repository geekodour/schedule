{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-23.11";
    flake-parts = { url = "github:hercules-ci/flake-parts"; inputs.nixpkgs-lib.follows = "nixpkgs"; };
  };

  outputs = inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      imports = [ ];
      systems = [ "x86_64-linux" "aarch64-linux" ];
      perSystem = { config, self', pkgs, ... }:
        {
          devShells = {
            default = pkgs.mkShell {
              name = "schedule";
              buildInputs = [];
              nativeBuildInputs = [];
              packages = with pkgs; [
                nodejs_21
                # gnumake
                # python311
                # inotify-tools
                # jq
              ];
            };
          };
        };
    };
}
