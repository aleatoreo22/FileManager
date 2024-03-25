package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

type PathContent struct {
	Name string `json:"name"`
	Path string `json:"path"`
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) SearchPath() []PathContent {
	pathsContent := []PathContent{
		{"Desktop", ""},
		{"Documents", ""},
		{"Downloads", ""},
		{"Music", ""},
		{"Pictures", ""},
		{"Public", ""},
		{"Videos", ""},
		{"New Folder", ""},
	}
	return pathsContent
}
