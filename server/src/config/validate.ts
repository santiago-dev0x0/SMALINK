import { z } from 'zod';

export const validate = <T>(
  config: Record<string, unknown>,
  schema: z.ZodSchema<T>,
): T => {
  try {
    return schema.parse(config);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => {
        const path = err.path.join('.');
        const message = err.message;
        
        // Mostrar el valor actual si está disponible
        const currentValue = err.path.length > 0 
          ? err.path.reduce((obj: any, key) => obj?.[key], config)
          : undefined;
        
        return `❌ ${path}: ${message}${currentValue !== undefined ? ` (valor actual: ${currentValue})` : ''}`;
      });
      
      const errorMessage = [
        ' Error de configuración:',
        '',
        'Variables de entorno faltantes o inválidas:',
        ...errors,
      ].join('\n');
      
      throw new Error(errorMessage);
    }
    throw error;
  }
};
