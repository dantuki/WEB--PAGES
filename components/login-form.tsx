"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff } from "lucide-react"
import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState("login")
  const [userRole, setUserRole] = useState("usuario")
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación real
    console.log("Iniciando sesión como:", userRole)
    // Redirigir al usuario a la página de categorías según su rol
    if (userRole === "aprendiz") {
      router.push("/dashboard/aprendiz")
    } else {
      router.push("/dashboard")
    }
  }

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de registro real
    console.log("Registrando usuario como:", userRole)
    // Redirigir al usuario a la página de categorías según su rol
    if (userRole === "aprendiz") {
      router.push("/dashboard/aprendiz")
    } else {
      router.push("/dashboard")
    }
  }

  const handleGoogleAuth = () => {
    // Aquí iría la lógica de autenticación con Google
    console.log("Autenticando con Google como:", userRole)
    // Redirigir al usuario a la página de categorías según su rol
    if (userRole === "aprendiz") {
      router.push("/dashboard/aprendiz")
    } else {
      router.push("/dashboard")
    }
  }

  return (
    <Card className="w-full">
      <Tabs defaultValue="login" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
          <TabsTrigger value="register">Registrarse</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <CardHeader>
            <CardTitle>Iniciar Sesión</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder a la plataforma</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role-login">Tipo de Usuario</Label>
              <Select defaultValue={userRole} onValueChange={setUserRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usuario">Usuario (Profesional)</SelectItem>
                  <SelectItem value="aprendiz">Aprendiz (Estudiante)</SelectItem>
                </SelectContent>
              </Select>
              {userRole === "aprendiz" && (
                <p className="text-xs text-slate-500 mt-1">
                  Como aprendiz, tendrás acceso a contenido educativo adaptado y menos técnico.
                </p>
              )}
              {userRole === "usuario" && (
                <p className="text-xs text-slate-500 mt-1">
                  Como usuario profesional, tendrás acceso a contenido técnico detallado.
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo Electrónico</Label>
              <Input id="email" type="email" placeholder="correo@ejemplo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <div className="relative">
                <Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">O continúa con</span>
              </div>
            </div>
            <Button variant="outline" className="w-full flex items-center gap-2" onClick={handleGoogleAuth}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Continuar con Google
            </Button>
          </CardFooter>
        </TabsContent>

        <TabsContent value="register">
          <CardHeader>
            <CardTitle>Crear Cuenta</CardTitle>
            <CardDescription>Regístrate para acceder a todos los recursos</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="role-register">Tipo de Usuario</Label>
              <Select defaultValue={userRole} onValueChange={setUserRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona tu rol" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usuario">Usuario (Profesional)</SelectItem>
                  <SelectItem value="aprendiz">Aprendiz (Estudiante)</SelectItem>
                </SelectContent>
              </Select>
              {userRole === "aprendiz" && (
                <p className="text-xs text-slate-500 mt-1">
                  Como aprendiz, tendrás acceso a contenido educativo adaptado y menos técnico.
                </p>
              )}
              {userRole === "usuario" && (
                <p className="text-xs text-slate-500 mt-1">
                  Como usuario profesional, tendrás acceso a contenido técnico detallado.
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Nombre</Label>
                <Input id="firstName" placeholder="Juan" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Apellido</Label>
                <Input id="lastName" placeholder="Pérez" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-register">Correo Electrónico</Label>
              <Input id="email-register" type="email" placeholder="correo@ejemplo.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-register">Contraseña</Label>
              <div className="relative">
                <Input id="password-register" type={showPassword ? "text" : "password"} placeholder="••••••••" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full" onClick={handleRegister}>
              Registrarse
            </Button>
            <div className="relative w-full">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">O regístrate con</span>
              </div>
            </div>
            <Button variant="outline" className="w-full flex items-center gap-2" onClick={handleGoogleAuth}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              Registrarse con Google
            </Button>
          </CardFooter>
        </TabsContent>
      </Tabs>
    </Card>
  )
}
